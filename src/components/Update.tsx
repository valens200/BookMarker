import React from 'react'
import ReactDOM from 'react-dom'
import { BsPlusLg } from "react-icons/bs"
import logo from "../assets/images/logoo.png"
import { formData, inputsData2, formData2 } from '../assets/data'
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core'
import { Input } from 'postcss'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { inputsData } from '../assets/data'
import { useState } from 'react'
import { BsPlus } from "react-icons/bs"
import { useAppDispatch } from '../store'
import Slider from '@material-ui/core'
import { Fade } from "react-awesome-reveal";
import { setShowForm } from '../features/BookMarkSlice'
import { GiCrossMark } from "react-icons/gi"
import { addBookMap, createNewCatgory, updateBookMarkk } from '../features/BookMarkSlice'
import { category } from '../types/appTypes'
import { useSelect } from '@mui/base'
function Update() {
    const [showCreateCategory, setShowCreateCategory] = useState(false);
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [Link, setLink] = useState("");
    const [Description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const Categories = useSelector((store: RootState) => store.bookmarks.Categories)
    const showForm = useSelector((store: RootState) => store.bookmarks.showForm);
    const showUpdateForm = useSelector((store: RootState) => store.bookmarks.showUpdateForm);
    const setSelectedBookMark: any = useSelector((store: RootState) => store.bookmarks.selectedBookMark);
    const selectedBookMark = useSelector((store: RootState) => store.bookmarks.selectedBookMark);
    const selectedCategory = useSelector((store: RootState) => store.bookmarks.selectedCategory);
    const [value, setValue] = useState<string>("value")
    const clicked = (index: number) => {
        if (index == 1) {
            setShowCreateCategory(true)
        }
    }
    const back = (index: number) => {
        if (index == 1) {
            setShowCreateCategory(false)
        }
    }

    const handleInputs = (type: string, value: string) => {
        switch (type) {
            case 'Title':
                setTitle(value);
                break;
            case 'Link':
                setLink(value);
                // console.log(Link);
                break;
            case 'Description':
                setDescription(value);
                break;
            case 'category':
                setCategory(value);
                break;
            default:
                console.log('no property seen')
        }
    }
    const updateBookMark = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const bookMark = { id: 1, title: title, link: Link, description: Description, category: "" };
        dispatch(updateBookMarkk({ categoryId: selectedCategory.id, bookMarkId: selectedBookMark.id, newBookMark: bookMark }));
    }

    const createCategory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCategory: category = {
            id: Categories.length + 1,
            name: title,
            image: "",
            bookMarks: []
        }
        dispatch((createNewCatgory(newCategory)))

    }
    const getValue = (data: string): string | number => {
        let valuee: string | number = "default";
        switch (data) {
            case 'Title':
                valuee = selectedBookMark.title;
                break;
            case 'name':
                valuee = selectedBookMark.title;
                break;
            case 'Description':
                valuee = selectedBookMark.description;
                break;
            case 'id':
                valuee = selectedBookMark.id;
                break;
            case 'Link':
                valuee = selectedBookMark.link;
                break;
        }
        return valuee;

    }
    const categories = useSelector((store: RootState) => store.bookmarks.Categories);
    return showUpdateForm == true ? ReactDOM.createPortal(<div className='w-[100%] z-20  text-white h-[74vh] absolute flex  fixed top-[10%] '>
        <div className='items-center text-black shadow-lg flex items-center  bg-white   md:w-[26%] mx-auto items-center h-[100%]'>
            <div className='h-[90%] flex flex-col space-y-8  w-[100%]'>
                <div className="">
                    <div className='w-[20%]  float-right'>
                        <GiCrossMark className="font-bold text-2xl" onClick={() => dispatch(setShowForm(false))} />
                    </div>
                </div>
                <div className='w-[50%] flex flex-col space-y-3  mx-auto'>
                    <img className="w-[28%] mx-auto" src={logo} alt="" />
                    <p className='text-center'>Update  existing book mark</p>
                </div>
                <Fade>
                    {showCreateCategory == false ?
                        <form onSubmit={((e) => updateBookMark(e))}>
                            <div className='flex flex-col space-y-4'>
                                {formData.map((data, index) => (
                                    <div key={index} className='flex w-[90%] mx-auto flex-col '>
                                        <TextField
                                            id="outlined"
                                            label={data.name}
                                            onChange={(e) => handleInputs(data.name, e.target.value)}
                                            defaultValue={getValue(data.name)}
                                        />

                                    </div>
                                ))}
                                <div className='w-[90%] mx-auto '>
                                    <FormControl className="w-[100%]">
                                        <InputLabel id="demo-simple-select-label" className='text-black'>Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={categories[0].name}
                                        >
                                            {categories.map((category, index) => (
                                                <MenuItem>{category.name}</MenuItem>
                                            ))}
                                            <MenuItem className="bg-black" onClick={() => clicked(1)}>create category  <BsPlus className='font-bold' /></MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                {inputsData.map((data, index) => (
                                    <div key={index} className='w-[90%] rounded bg-black text-white  text-center font-bold  h-[5vh] mx-auto'>
                                        <input onClick={() => clicked(index)} type="submit" value={data.name} className='w-[100%] h-[100%]' />
                                    </div>

                                ))}

                            </div>

                        </form> :
                        <Fade>
                            <form onClick={(e) => createCategory(e)}>
                                <div className='flex flex-col space-y-4'>
                                    {formData2.map((data, index) => (
                                        <div key={index} className='flex w-[90%] mx-auto flex-col '>
                                            <TextField
                                                className="h-[100%] rounded-r-0   md:w-[100%] p-4"
                                                label={data.name}
                                                onChange={(e) => handleInputs(data.name, e.target.value)}
                                                type={data.type}
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                        </div>
                                    ))}
                                    <div className='w-[90%] invisible mx-auto '>
                                        <FormControl className="w-[100%]">
                                            <InputLabel id="demo-simple-select-label" className='text-black'>Category</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={categories[0].name}
                                            >
                                                {categories.map((category, index) => (
                                                    <MenuItem>{category.name}</MenuItem>
                                                ))}
                                                <MenuItem >create category  <BsPlus /></MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    {inputsData2.map((data, index) => (
                                        <div key={index} className='w-[90%] rounded bg-black text-white  text-center font-bold  h-[5vh] mx-auto'>
                                            <input onClick={() => back(index)} type={data.type} value={data.name} className='w-[100%] h-[100%]' />
                                        </div>
                                    ))}

                                </div>

                            </form>
                        </Fade>
                    }
                </Fade>
            </div>

        </div>
    </div >, document.getElementById("create")!) : null
}

export default Update