import React from 'react';
import { useParams } from 'react-router-dom';
import componet from "../components/boards/CalendarBoard/CalendarBoard";

function BoardPage() {

    const { id } = useParams();



    return (
        <div>BoardPage</div>
    )
}

export default BoardPage