import { FormEvent } from "react";

export default function Form() {
    async function onsubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData
        })

        const data = await response.json()
    }

    return(
        <form onSubmit={onsubmit}>

        </form>
    );
}