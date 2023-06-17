import React, { useState, useEffect, useRef } from 'react';
import BoardService from '../services/BoardService';
import { useParams } from 'react-router-dom';

function SearchBar({ tasks, setTasks }) {
    const [query, setQuery] = useState('');
    const [queryOpen, setQueryOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const searchRef = useRef(null);
    const [options, setOptions] = useState([]);
    const [firstState, setFirstState] = useState([]);

    const { id } = useParams();

    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value);

        if (value.trim() !== '') {
            const filteredTasks = firstState.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
            );
            setTasks(filteredTasks);
        } else {
            setTasks(firstState);
        }
    };

    const handleMouseEnter = (index) => {
        setSelectedIndex(index);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setSelectedIndex(null);
        setIsHovered(false);
    };

    const queryBoard = (item) => {
        // Perform any necessary actions with the selected board
    };

    const toggleSearch = () => {
        setQueryOpen(!queryOpen);
    };

    useEffect(() => {
        BoardService.getOne(id)
            .then((res) => {
                setOptions(res.data.tasks);
                setFirstState(res.data.tasks);
                setTasks(res.data.tasks);
            })
            .catch((err) => console.log(err));

        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setQueryOpen(false);
                setQuery('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [id, setTasks]);

    return (
        <div className="search" ref={searchRef} onClick={toggleSearch}>
            <i style={{ color: 'black' }} className="fa-solid fa-magnifying-glass search--icon"></i>
            <input
                className="search--input"
                value={query}
                onChange={handleChange}
                onClick={() => setQueryOpen(true)}
            />
        </div>
    );
}

export default SearchBar;