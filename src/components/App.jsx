import {imagesAPI} from "../api/api";
import { Component } from "react"
import { Loader } from "./Loader/Loader";
import SearchBar from "./SearchBar/Searchbar";
import Modal from "./Modal/Modal";
import Notiflix from "notiflix";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";


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

  toggleModal = (imageUrl, tag) => {
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
    this.setState({ name, page:1, hits: [] });
  };
  
  // handleVisibleButton = () => {
  //   const { total, hits } = this.state;
  //   if (hits.length > 0 && total > 12) {
  //     this.setState({ visibleButton: true })
  //   }
  // };


  componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;
    
    if (prevState.name !== name || prevState.page !== page) {
      this.setState({ isLoading: true});
      imagesAPI(name, page)
        .then(({ hits, total }) => {
          this.setState(prevState => (
            {
              hits: [...prevState.hits, ...hits],
              total: total,
              visibleButton: this.state.page < Math.ceil(total/12)
          }
          ))
        })
        .finally(() => this.setState({ isLoading: false }))
        .catch((error) => {
          console.error(error.message);
          Notiflix.Notify.failure('Images no found');
        });
    };

    // if  {
    //   this.setState({ isLoading: true });
    //   imagesAPI(name, page)
    //     .then(({hits, total}) => {
    //       this.setState(prevState => ({
    //         hits: [...prevState.hits, ...hits],
    //         isLoading: false,
    //         total: total,
    //       }))
    //       .catch((error) => {
    //           console.error(error.message);
    //           Notiflix.Notify.failure('Images no found');
    //         })
    //     })
    // };

    

  };

  render() {
    const { hits, isLoading, showModal, largeImageURL, tags, visibleButton } = this.state;

    return (
      <>
        <SearchBar onSubmitHandler={this.handleSearchbarFormSubmit} />
        
        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} alt={tags} />
        )}

        {hits.length!==0 && (
          <>
            <ImageGallery images={hits} onImageClick={this.toggleModal} />
          </>
        )}

        {!isLoading && <Button onClick={this.handleButton} isVisible={visibleButton} />}

      </>
    )
  }

};



export default App;