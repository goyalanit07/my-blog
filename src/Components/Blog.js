import React, { useState } from 'react';
import { addItem, editItem, deleteItem } from "../action-creator/index"
import { useSelector, useDispatch } from 'react-redux';
import BlogItem from './BlogItem';

export default function Blog() {
    const [data, setData] = useState({
        title: '',
        info: ''
    });
    const list = useSelector((state) => state.blogReducer.list);
    const editList = useSelector((state) => state.blogReducer.text);
    const dispatch = useDispatch();

    const onChangeFn = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((prevalue) => {
            if (name === 'title') {
                return {
                    title: value,
                    info: prevalue.info
                }
            } else if (name === 'info') {
                return {
                    title: prevalue.title,
                    info: value
                }
            }
        })
    }
    return (<>
        <div className='container'>
            <h3 className='my-4'>Blog - Add Something into Blog</h3>
            <div className="input-group my-4">
                <span className="input-group-text">Title</span>
                <input type="text" className="form-control" name='title' value={data.title || ""} onChange={onChangeFn} placeholder="Title" aria-label="Title" />
            </div>
            <div className="input-group ">
                <span className="input-group-text">Information</span>
                <textarea className="form-control" rows="3" name='info' value={data.info || ""} onChange={onChangeFn} placeholder="Add Some Imformation"></textarea>
            </div>

            <button type="button" className="btn btn-secondary mx-4 my-2" onClick={() => dispatch(addItem(data), setData(
                {
                    title: '',
                    info: ''
                }
            ))}>Add</button>

            <div className='row'>
                {
                    list.map((element) => {
                        return (
                            <div className="col-lg-4 col-sm-6 col-xs-12 my-3" key={element.id} >
                                <BlogItem title={element.data.title} info={element.data.info}
                                    editBtn={() => dispatch(editItem(element.id)
                                    )}
                                    deleteBtn={() => dispatch(deleteItem(element.id))} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </>
    )
}
