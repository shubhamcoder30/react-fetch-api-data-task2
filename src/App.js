import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const firstPage = () => {
    setPage(1);
  };
  const secondPage = () => {
    setPage(2);
  };
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(result => {
      result.json().then(resp => {
        setData(resp.data);
      });
    });
  }, [page]);

  {
    return (
      <>
        <h1> FETCH API {page}</h1>

        <Table className="table" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id no</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="dark" onClick={firstPage}>
          page 1
        </Button>
        <Button variant="dark" onClick={secondPage}>
          page 2
        </Button>
      </>
    );
  }
}
export default App;
