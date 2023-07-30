import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';

export function ImageUpload() {
    const [images, setImages] = React.useState([]);
    const [item, setItem] = useState(false)
    const [value, setValue] = useState('')
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload
                }) => (
                    <div className="upload__image-wrapper">
                        {item ? <div style={{ height: '150px', width: '400px', border: '2px solid black' }}>
                            <button
                                onClick={() => {
                                    onImageUpload()
                                }}> Choose a file</button>
                            <input type='text' onChange={(event) => {
                                setValue(event.target.value)
                            }} />
                        </div> : null}
                        <button onClick={() => {
                            setItem(!item)
                        }}>Click here</button>
                        &nbsp;
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <p>{value}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}




