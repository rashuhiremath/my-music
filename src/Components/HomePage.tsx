import { useState, FormEvent } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Music from "./interfaces/Music";
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import AlbumPage from "./AlbumPage";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [music, setMusic] = useState<Music[]>([]);

  const getMyMusic = async (query: string) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (response.ok) {
        let music = await response.json();
        let songs = music.data;
        setMusic(songs);
      } else {
        console.log("couldn't fetch the music");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    getMyMusic(query);
  };

  //   useEffect(() => {
  //     getMyMusic();
  //   }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Music Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {music.map((song) => (
          <Col md={3}>
            <Card style={{ width: "14rem" }}>
                <Link to={`/album/${song.id}`}>
              <Card.Img variant="top" src={song.album.cover} />
              </Link>
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default HomePage;
