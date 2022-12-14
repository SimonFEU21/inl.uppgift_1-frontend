import React, { useState } from 'react'

const CommentForm = () => {

    // const {issueId, customerId} = useParams()



    const [issueId, setIssueId] = useState(2)
    const [customerId, setCustomerId] = useState(1)
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (customerId !== 0) {
            const json = JSON.stringify({ comment, issueId, customerId })
            console.log(json)

            const res = await fetch('https://localhost:7244/api/Comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
            console.log(await res.json())
            setComment('')
        }
    }

    return (
        <form className='regForm' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Ange Kommentar</label>
                <textarea type="text" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
            <button type="submit" className="btn btn-success">Spara</button>
            </div>
        </form>
    )
}

export default CommentForm