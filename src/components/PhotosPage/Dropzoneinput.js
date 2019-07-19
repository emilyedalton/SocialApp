import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {Icon,Header} from 'semantic-ui-react'
 
const  DropZoneInput = ({setFiles}) =>{
  const onDrop = useCallback(acceptedFiles => {
setFiles(acceptedFiles.map(file => Object.assign(file, {
    preview: URL.createObjectURL(file)
})))
}, [setFiles])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      multiple: false,
      accept: 'image/*'


})
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Icon name='upload' size='huge'/>
      <Header content="drag image here"/>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default DropZoneInput