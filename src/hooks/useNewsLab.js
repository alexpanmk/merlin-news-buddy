//hooks for NewsLab
import { useState, useEffect  } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const useNewsLab = () => {
    const [nodes, setNodes] = useLocalStorage("nodes", []);
    const [newsLabInitialLoad, setNewsLabInitialLoad] = useState(false);
    //add node method
    const addNode = (node) => {
        setNodes([...nodes, node]);
    }
    //delete node method
    const deleteNode = (node) => {
        setNodes(nodes.filter((n) => n.id !== node.id));
    }
}

export default useNewsLab;