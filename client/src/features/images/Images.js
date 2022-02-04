import React , {useState,useEffect} from 'react';
import { Form } from 'react-bootstrap';
import {uploadFile} from 'react-s3';
import {useDispatch} from "react-redux"
import {imagesAdded} from './imagesSlice';


const Images = ({handleImages}) => {
  const S3_BUCKET ='shoppaige';
  const REGION ='us-east-1';
  const dispatch=useDispatch()
  
  const config = {
      bucketName: S3_BUCKET,
      dirName: 'images',
      region: REGION,
      accessKeyId: 'AKIA5JDKYRPA5ERHEL7N',
      secretAccessKey: '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',
      s3Url:'http://shoppaige.s3-website-us-east-1.amazonaws.com'
  }

  // useEffect(()=>{
  //   fetch(`/images`)
  //   .then(res=>res.json())
  //   .then(data=>dispatch(imagesAdded(data)))
  // },[])
    // const [selectedFile, setSelectedFile] = useState(null);
    // const[imagesUrl,setImagesUrl]=useState([])

    // const[imagesUrl,setImagesUrl]=useState({
    //   image1:null,
    //   image2:null,
    //   image3:null
    // })
    // const handleFileInput = (e) => {
    //   // console.log(e.target.files[0])
    //     ;
    // }
    

    function upload(e){
      // setSelectedFile(e.target.files[0])
       uploadFile(e.target.files[0], config)
            .then(data => {
              // handleChange({...product.images,[product.images]:{...product.images,imageUrl:data.location}})
              handleImages(data.location)
              // handleChange(e.target.files[0])
              // if(e.target.name==="image1"){
              //   setImagesUrl({...imagesUrl,image1:data.location})
              //   dispatch(imagesAdded({imageUrl:data.location}))
                
              // }
              // else if(e.target.name==="image2"){
              //   setImagesUrl({...imagesUrl,image2:data.location})
              //   dispatch(imagesAdded({imageUrl:data.location}))
              // }
              // else if(e.target.name==="image3"){
              //   setImagesUrl({...imagesUrl,image3:data.location})
              //   dispatch(imagesAdded({imageUrl:data.location}))
              // }
            })
            .catch(err => console.log(err))
    }
    // console.log("image1",imagesUrl.image1)
    // console.log("image2",imagesUrl.image2)
    // console.log("image3",imagesUrl.image3)

    return <div>
        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Image 1</Form.Label>
        <Form.Control type="file" name="images" multiple onChange={upload} />
        </Form.Group>
        <Form.Group controlId="formFileMultiple"  className="mb-3">
        <Form.Label>Image 2</Form.Label>
        <Form.Control type="file" multiple name="images" onChange={upload} />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Image 3</Form.Label>
        <Form.Control type="file" multiple name="images" onChange={upload} />
        </Form.Group>
        {/* <div>React S3 File Upload</div>
        <input type="file" onChange={upload}/> */}
        {/* <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button> */}
        {/* {imageUrl!==null&&<img src={imageUrl} alt="image"></img>} */}
    </div>
}
export default Images







// import React ,{useState} from 'react';

// import {uploadFile} from "react-s3"
// import {Form} from "react-bootstrap"

// function Images() {
//     let config = {
//         bucketName: 'shoppaige2',/* optional */
//         region: 'us-west-1',
//         accessKeyId: 'AKIA5JDKYRPA5ERHEL7N',
//         secretAccessKey: '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',
//         s3Url:'https://shoppaige2.s3.amazonaws.com/',
//   }

// function upload(e){
//   // debugger
//   // console.log(e.target.files)
//   uploadFile(e.target.files[0],config)
//   .then((data)=>console.log(data.location))
//   .catch((err)=>console.log(err))
// }
//   return (
//     <>
//     <h3>Upload</h3>
//     <input type="file" onChange={upload}/>
//     </>
//     // <Form.Group controlId="formFileMultiple" className="mb-3">
//     //     <Form.Label>Multiple files input example</Form.Label>
//     //     <Form.Control type="file" multiple onChange={upload} />
//     //     </Form.Group>
//   )

// }

// export default Images;
// import AWS from 'aws-sdk'

// const S3_BUCKET ='shoppaige';
// const REGION ='US East (N. Virginia)';


// AWS.config.update({
//     accessKeyId: 'AKIA5JDKYRPA5ERHEL7N',
//     secretAccessKey: '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'
// })

// const myBucket = new AWS.S3({
//     params: { Bucket: S3_BUCKET},
//     region: REGION,
// })

// const Images= () => {

//     const [progress , setProgress] = useState(0);
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }

//     const uploadFile = (file) => {

//         const params = {
//             ACL: 'public-read',
//             Body: file,
//             Bucket: S3_BUCKET,
//             Key: file.name
//         };

//         myBucket.putObject(params)
//             .on('httpUploadProgress', (evt) => {
//                 setProgress(Math.round((evt.loaded / evt.total) * 100))
//             })
//             .send((err) => {
//                 if (err) console.log(err)
//             })
//     }


//     return <div>
//         <div>Native SDK File Upload Progress is {progress}%</div>
//         <input type="file" onChange={handleFileInput}/>
//         <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
//     </div>
// }

// export default Images;

