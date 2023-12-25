import imagesAPI from "../api/api";
import { Component } from "react"
import { Loader } from "./Loader/Loader";
import SearchBar from "./SearchBar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGallery/ImageGalleryItem";
import Modal from "./Modal/Modal";
import Notiflix from "notiflix";
import Button from "./Button/Button";

class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
    showModal: false,
    isLoading: false,
    largeImageURL: '',
    tags: ''
  }

  componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;
    
    if (prevState.name !== name) {
      this.setState({ isLoading: true, page: 1 });
      imagesAPI(name)
        .then(images => {
          this.setState({
            hits: images,
            isLoading: false,
          })
        })
        .catch(error => {
          console.error(error.message);
        });    
    };

    if (prevState.page !== page) {
      this.setState({ isLoading: true });
      imagesAPI(name, page) 
        .then(images => {
          this.setState(prevState => ({
            hits: [...prevState.hits, ...images],
            isLoading: false,
          }))
            .catch(error => {
              console.error(error.massage);
              Notiflix.Notify.failure('Images no found');
          })
      })
    };

  };


  toggleModal = (imageUrl, tag, id) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: imageUrl,
      tags: tag,
    }))
  };

  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchbarFormSubmit = name => {
    this.setState({ name });
  };
  
  // getImages = ({name, page}) => {
  //   this.setState({ isLoading: true });
  //   try {
  //     axios
  //       .get(`${baseURL}?key=${apiKEY}&q=${name}&page=${page}&${params}`)
  //       .then(response => {
  //         if (!response.data.hits.length) {
  //           Notiflix.Notify.failure('Images no found');
  //         } else if (name === this.state.name) {
  //           this.setState(state => ({
  //             hits: [...state.hits, ...response.data.hits],
  //             name: name,
  //             page: state.page + 1,
  //           }))
  //         } else {
  //           this.setState(state => ({
  //             hits: response.data.hits,
  //             name: name,
  //             page: state.page + 1,
  //           }))
  //         }

  //       });
        
      
  //   } catch (error) {
  //     console.error(error.message);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
    
  // }

  // loadMore = () => {
  //   this.getImages(this.state);
  // }

  render() {
    const { hits, isLoading, showModal, largeImageURL, tags } = this.state;
    console.log(hits);
    return (
      <>
        <SearchBar onSubmitHandler={this.handleSearchbarFormSubmit} />
        
        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} alt={tags} />
        )}

        {hits && (
          <ImageGallery>
             <ImageGalleryItem articles={hits} onImage={this.toggleModal}/>
          </ImageGallery>
        )}

        {hits.lenth > 0 && (
          <Button onClick={() => this.changePage} />
        )}


      </>
    )
  }

};

export default App;