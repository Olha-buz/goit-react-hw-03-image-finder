import {imagesAPI} from "../api/api";
import { Component } from "react"
import { Loader } from "./Loader/Loader";
import SearchBar from "./SearchBar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGallery/ImageGalleryItem";
import Modal from "./Modal/Modal";
import Notiflix from "notiflix";
import { Button } from "./Button/Button";


class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
    total: 0,
    showModal: false,
    isLoading: false,
    largeImageURL: '',
    tags: '', 
    visibleButton: false,
  }

  toggleModal = (imageUrl, tag, id) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: imageUrl,
      tags: tag,
    }))
  };

  handleButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchbarFormSubmit = name => {
    this.setState({ name });
  };
  
  handleVisibleButton = () => {
    const { total, hits } = this.state;
    if (hits.length > 0 && total > 12) {
      this.setState({ visibleButton: true })
    }
  };


  componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;
    
    if (prevState.name !== name) {
      this.setState({ isLoading: true, page: 1 });
      imagesAPI(name)
        .then(({ hits, total }) => {
          this.setState({
            hits: hits,
            isLoading: false,
            total: total,
          })
        })
        .catch((error) => {
          console.error(error.message);
        });
    };

    if (prevState.page !== page) {
      this.setState({ isLoading: true });
      imagesAPI(name, page)
        .then(({hits, total}) => {
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
            isLoading: false,
            total: total,
          }))
          .catch((error) => {
              console.error(error.message);
              Notiflix.Notify.failure('Images no found');
            })
        })
    };

    

  };

  render() {
    const { hits, isLoading, showModal, largeImageURL, tags, total } = this.state;

    const hitsArr = Array.isArray(hits) ? hits : [];
    const loadMore = hitsArr.length > 0 && total > hitsArr.length;


    return (
      <>
        <SearchBar onSubmitHandler={this.handleSearchbarFormSubmit} />
        
        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} alt={tags} />
        )}

        {hits && (
          <>
            <ImageGallery>
              <ImageGalleryItem articles={hits} onImage={this.toggleModal} />
            </ImageGallery>

          </>
        )}

        {!isLoading && <Button onClick={this.handleButton} isVisible={loadMore} />}

      </>
    )
  }

};



export default App;