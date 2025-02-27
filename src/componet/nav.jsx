
import { useNavigate } from 'react-router-dom';

function Nav(){
  const navigate = useNavigate();
  return(
    <div className='nav'>
      <button onClick={() => navigate('/')}>
       首頁
      </button>
      <button onClick={() => navigate('/firework')}>
        煙火
      </button>
      <button onClick={() => navigate('/scratch')}>
        刮刮樂
      </button>
      <button onClick={() => navigate('/rainny')}>
        下雨
      </button>
      <button onClick={() => navigate('/snow')}>
        下雪
      </button>
    </div>
  )
}

export default Nav;