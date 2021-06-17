import { useState } from "react";
import { useForm } from "react-hook-form";
import { PostAddIngridient } from "../utils/auth";
import '../css/Form.css';

const AddIngridient = () => {
    const [ isAdd, setIsAdd ] = useState(false);
    const [ pictures, setPictures ] = useState({});
    const { register, handleSubmit } = useForm();

    const handler = data => {
        setPictures(data);
        setIsAdd(true);
    };

    return (
        <>
            {isAdd ? <PostAddIngridient image={pictures.image[0]} preview={pictures.preview[0]} /> : null}
            <form className="Form" onSubmit={handleSubmit(handler)}>
                <div className="Form__input">
                    <label htmlFor="input-email">Image ingridient</label>
                    <input type="file" {...register('image')} />
                </div>
                <div className="Form__input">
                    <label htmlFor="input-password">Preview ingridient</label>
                    <input type="file" {...register('preview')} />
                </div>
                <button className="Form__button">Add</button>
            </form>
        </>
    );
};

export {AddIngridient};