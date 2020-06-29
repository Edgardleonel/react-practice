import React, {useState, useEffect, useMemo, useCallback} from 'react';

// import { Container } from './styles';

function Hooks() {
 
const [tech, setTech] = useState([
    'React JS',
    'Angular',
    'Node',
    'Laravel'
    ])

    const [newValue, setNewValue] = useState('')

    const onsubmit = useCallback(() => {
    setTech([...tech, newValue])
    setNewValue('')
    },[tech, newValue])

    useEffect(() => {
        const storageTech = localStorage.getItem('tech');

        if(storageTech) {
            setTech(JSON.parse(storageTech))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech))
    },[tech])


    const techSize = useMemo(() => tech.length, [tech])

    return (
    <>
        <ul>
        {tech.map(t => (
        <li key={t}>{t}</li>
        ))}
        </ul>
        <strong>Você tem {techSize} tecnologias</strong>
        <br />
        <input value={newValue} onChange={e => setNewValue(e.target.value)}/>
        <button type="submit" onClick={onsubmit}>Adicionar</button>
    </>
    );
}

export default Hooks;