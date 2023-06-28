import { useState, useRef, useEffect } from 'react'

function NewBoardForm({ newBoardState, setNewBoardState }) {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({

    })

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                // Clear the form data when clicking outside the form
                setNewBoardState(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };
    }, [newBoardState]);

    return (
        <div className='overlay'>
            <form className='newBoardForm' ref={formRef} onSubmit={handleSubmit}>
                <div className='newBoardForm__close' onClick={() => setNewBoardState(!newBoardState)}><i class="fa-solid fa-xmark" ></i></div>
                <h2 className='newBoardForm__title'>Create Board</h2>
                <div className='form-group'>
                    <label htmlFor="boardName" className="newBoardForm__label">Board name</label>
                    <input type="text" className="newBoardForm__input form-control" placeholder='Board Name' />
                </div>
                <div className='newBoardForm__boardType'>
                    <div className='newBoardForm__boardType--group'>
                        <label htmlFor="boardName" className="newBoardForm__boardType--label">Calendar</label>
                        <input type="radio" className="newBoardForm__radio" name='boardType'/>
                    </div>
                    <div className='newBoardForm__boardType--group'>
                        <label htmlFor="boardName" className="newBoardForm__boardType--label">Table</label>
                        <input type="radio" className="newBoardForm__radio" name='boardType'/>
                    </div>
                </div>
                <div className='newBoardForm__footer'>
                    <div className='newBoardForm__cancel' onClick={() => setNewBoardState(!newBoardState)}>Cancel</div>
                    <button className='btn btn-primary newBoardForm__submit'>Create Board</button>
                </div>
            </form>
        </div>
    )
}

export default NewBoardForm