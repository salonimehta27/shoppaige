import React , {useState} from 'react';
import { Form } from 'react-bootstrap';
import {uploadFile} from 'react-s3';


const Images = () => {
  const S3_BUCKET ='shoppaige';
  const REGION ='us-east-1';
  
  
  const config = {
      bucketName: S3_BUCKET,
      dirName: 'images',
      region: REGION,
      accessKeyId: 'AKIA5JDKYRPA5ERHEL7N',
      secretAccessKey: '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',
      s3Url:'http://shoppaige.s3-website-us-east-1.amazonaws.com'
  }
    const [selectedFile, setSelectedFile] = useState(null);
    const[imageUrl,setImageUrl]=useState(null)

    // const handleFileInput = (e) => {
    //   // console.log(e.target.files[0])
    //     ;
    // }

    function upload(e){
      // setSelectedFile(e.target.files[0])
       uploadFile(e.target.files[0], config)
            .then(data => {
              console.log(data.location)
              setImageUrl(data.location)
            })
            .catch(err => console.log(err))
    }

    return <div>
        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple onChange={upload} />
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

