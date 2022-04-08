import {Link} from 'react-router-dom'
export default function QuizCard(props) {
    return (
      <div className="col-12 text-center px-2 pb-2">
       <div className='p-0 shadow pb-3 rounded overflow-hidden'>
       <img className="w-100 rounded-0" height={130} src={props.thumbnail} alt={props.title} />
        <Link className='btn radius-20 shadow px-4 font-13 mt-3' to="/">شروع آزمون</Link>
       </div>
      </div>
    );
  };

