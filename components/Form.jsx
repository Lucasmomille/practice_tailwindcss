import { useForm } from "react-hook-form";
import {useRef, useState} from "react"


const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}

export default function Form() {
    const {register, handleSubmit, formState, errors} = useForm();


    const onSubmit = async data => {
        await wait(2000)
        console.log(data);
    }

    console.log(formState);

    return (
        <form action="submit" className="mb-16 md:p-4 p-2 md:items-center flex flex-col md:flex-row md:w-5/12 w-11/12 md:justify-between border-black border-2 rounded-xl" 
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:border-r-2 md:border-gray-200 md:mr-4">
                <label htmlFor="username">Prénom</label>
                <input type="text" id="username" name="username" placeholder="Votre prénom" className="text-gray-600 border-none p-0 mt-2 focus:ring-2 focus:ring-blue-200" 
                ref={register({required: true})} />
                {errors.username && <span className="text-red-500 text-xs">Vous devez renseigner ce champ</span>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="useremail" placeholder="Votre email" className="text-gray-600 border-none p-0 mt-2 focus:ring-2 focus:ring-blue-200" 
                ref={register({required: true})}/>
                {errors.username && <span className="text-red-500 text-xs">Vous devez renseigner ce champ</span>}
            </div>
        </div>
        <button className="rounded-full w-10 h-10 bg-brown-btn text-white font-bold text-4xl self-center md:self-auto">&rsaquo;</button>
        </form>
    )
}