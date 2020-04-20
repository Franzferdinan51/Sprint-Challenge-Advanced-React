import React from 'react';
import { Table } from 'reactstrap';
import useDarkMode from '../hooks/useDarkMode';
import './Player.css';

import { useFetchPlayers } from '../hooks/useFetchPlayers';

function Player() {
  const [theme, toggleTheme] = useDarkMode();
  const { players, loading, error } = useFetchPlayers();
  // console.log('', players);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      className='list'
      style={{

        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'light' ? '#00ffff' : '#000'
      }}>
      <button style={{
        marginBottom: '4%',
        background: '#005',
        color: '#ffffff',
      }} onClick={toggleTheme}>DarkMode</button>
      <Table className='table'>
        <tbody>
          <tr>
            <td style={{ background: '#ffff', color: '#000' }}>Name:</td>
            <td style={{ background: '#ffff', color: '#000' }}>Country:</td>
            {/* <td>Searched:</td> */}
          </tr>
        </tbody>
      </Table>
      {
        players.map(player => (
          <div key={player.id}>
            <Table className>
              <tbody>
                <tr>
                  <td style={{ background: '#ffff', color: '#000' }}>{player.name}</td>
                  <td style={{ background: '#ffff', color: '#000' }}>{player.country}</td>
                  {/* <td>{player.searches}</td> */}
                </tr>
              </tbody>
            </Table>
          </div>
        ))
      }
      {/* <div className='list'>
        <ul>
          STEP 3: Map over searchResults to see values in that array
          {players.map(player => {
            return <li key={player.id}>{player.name}</li>;
          })}
        </ul>
      </div> */}
    </div >
  );
}

export default Player;
