
const CategoryContainer = ({ category }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    window.fetch(`https://yts.mx/api/v2/list_movies.json?genre=${category}`)
      .then(response => response.json())
      .then(data => setState(data))
  }, [])

  return (state.length === 0 ? <h1>Loading...</h1>

    : <Category>
      {
        state.data.movies.map(movie => <MovieContainer key={movie.id} src={movie.medium_cover_image} title={movie.title} genre={movie.genres[0]} rating={movie.rating} duration={movie.runtime} />)
      }
    </Category>
  )
}

<ArrowsContainer>
        <Image src='../../../public/assets/images/previous.svg' onClick={() => setState(state - 1)} />
        <Image src='../../../public/assets/images/next.svg' onClick={() => setState(state + 1)} />
      </ArrowsContainer>  

export const ArrowsContainer = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  margin-top:15px ;
  background-color: #071338;
`
export const Image = styled.img`
  margin: 0 10px;
  height: 50px;
`
