from fastapi import FastAPI, Body
from pydantic import BaseModel
from typing import List
import networkx as nx
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline = Body(...)):

    G = nx.DiGraph()

    for node in pipeline.nodes:
        G.add_node(node.id)
    for edge in pipeline.edges:
        G.add_edge(edge.source, edge.target)

    num_nodes = G.number_of_nodes()
    num_edges = G.number_of_edges()

    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }