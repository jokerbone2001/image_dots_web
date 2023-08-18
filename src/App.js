import React, { Component } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      imagePreviewUrl: '',
      dots: [],
      imageSize: { width: 0, height: 0 }
    };
    this.handleFileReader = this.handleFileReader.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleFileReader(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      reader.onload = () => {
        this.setState({
          selectedImage: file,
          imagePreviewUrl: reader.result,
          dots: [],
          imageSize: { width: 0, height: 0 }
          
        });
      }
      reader.readAsDataURL(file);
    } else {
      alert('Only .jpg and .png file formats are allowed.');
    }
  }

  handleImageClick(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.setState(prevState => ({
      dots: [...prevState.dots, { x, y }]
    }));
  }
  handleImageLoad = (e) => {
    this.setState({
      imageSize: {
        width: e.target.offsetWidth,  
        height: e.target.offsetHeight  
      }
    });
    console.log(this.state.imageSize)
  }
  render() {
    const { imagePreviewUrl, dots } = this.state;

    return (
      <div className="App" style={{ backgroundColor: 'white' }}>
        <header className="App-header">
          <h2>Welcome to image dot web</h2>
          <p>Please create your image</p>
          <input 
            style={{ display: 'none'}} 
            type='file'
            onChange={this.handleFileReader}
            ref={fileInput => this.fileInput = fileInput}>
          </input>
          
          <Button variant="contained" color="primary" onClick={() => this.fileInput.click()}>
            Upload images
          </Button>
          
          {imagePreviewUrl && (
            <div style={{ position: 'relative', width: '26.67%', margin: '20px auto' }}>
              <img 
                src={imagePreviewUrl} 
                alt="Image Preview" 
                onLoad={this.handleImageLoad} 
                style={{ width: '100%', display: 'block', border: '1px solid #000' }} 
                onClick={this.handleImageClick}
              />
              {dots.map((dot, index) => (
                <div 
                  key={index}
                  style={{
                    position: 'absolute',
                    top: dot.y - 5,
                    left: dot.x - 5,
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'red',
                    borderRadius: '50%'
                  }}
                />
              ))}
            </div>
          )}

          {this.state.imageSize.width && this.state.imageSize.height && (
            <p>Image Size: {this.state.imageSize.width} x {this.state.imageSize.height}</p>
          )}

          {dots.length > 0 && <h3>Dot Information</h3>}
          <Paper elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Coordinates (x, y)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dots.map((dot, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>({dot.x}, {dot.y})</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </header>
      </div>
    );
  }
}

export default App;
