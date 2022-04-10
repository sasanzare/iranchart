import {Link} from 'react-router-dom'
import { Styles } from './QuizCard.css';
export default function QuizCard(props) {
    return (
      <div className="col-12 text-center px-2 pb-2">
       <div className='p-0 shadow pb-3 rounded overflow-hidden'>
       <img className="w-100 rounded-0 img-filter" height={130} src={props.thumbnail} alt={props.title} />
       <p className='text-center text-white title-filter font-weight-bold mx-auto  px-2'>{props.title}</p>
        <Link className='btn radius-20 shadow px-4 font-13 mt-3' to={'/quiz/'+props.id} >شروع آزمون</Link>
       </div>
      </div>
    );
  };

