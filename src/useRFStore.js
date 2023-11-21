import { create } from 'zustand';
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';
import { useLocalStorage } from '@uidotdev/usehooks';

// import initialNodes from './nodes';
// import initialEdges from './edges';

const initialNodes = [
    // {
    //   id: "1",
    //   connectable: false,
    //   data: {
    //     label: "Crypto Exchanges, Not Just FTX, Are All a Mess Right Now",
    //   },
    //   style: {
    //     minwidth: 300,
    //   },
    //   position: { x: 100, y: 25 },
    // },
    // {
    //   id: "2",
    //   connectable: false,
    //   type: "input",
    //   data: { label: "Bitcoin jumps as ETF hopes drive the token to $30,000" },
    //   position: { x: 100, y: 200 },
    //   style: {
    //     minwidth: 300,
    //   },
    // },
  ];
  
const initialEdges = [];

const useRFStore = create((set, get) => ({
    nodes: initialNodes,
    //add node
    addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
    edges: initialEdges,
    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    onConnect: (connection) => {
        set({
            edges: addEdge(connection, get().edges),
        });
    },
}));

// useRFStore.subscribe(
//     localStorage.setItem('nodes', JSON.stringify(useRFStore.getState().nodes))
// );

export default useRFStore;