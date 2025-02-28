import {createRoot} from 'react-dom/client'
import {column, PowerSyncDatabase, Schema, Table} from "@powersync/web";
import {PowerSyncContext, usePowerSync, useQuery} from "@powersync/react";
import {useMemo} from "react";

const AddNode = () => {
    const powerSync = usePowerSync();

    const onClick = async () => {
        const id = crypto.randomUUID();

        await powerSync.execute(
            `INSERT INTO nodes (id, title)
             VALUES (?, ?)`,
            [id, "Node " + id]
        );
    }

    return (
        <button onClick={onClick}>Add Node</button>
    )
}

const ListNodes = () => {
    const {data: nodes} = useQuery('SELECT * FROM nodes');

    return (
        <ul>
            {
                nodes.map(
                    (node) => (
                        <li key={node.id}>{node.title}</li>
                    )
                )
            }
        </ul>
    )
}

export const App = () => {
    const schema = new Schema({
        nodes: new Table({
            title: column.text,
        }),
    });

    const db = useMemo(() => {
        return new PowerSyncDatabase({
            schema: schema, database: {
                dbFilename: 'example.db'
            }
        })
    }, [])

    return (
        <PowerSyncContext.Provider value={db}>
            <AddNode/>
            <ListNodes/>
        </PowerSyncContext.Provider>
    )
}

createRoot(document.getElementById('root')).render(<App/>)
