import {Link} from 'react-router-dom'
export default function QuizCard(props) {
    return (
      <div className="col-12 text-center">
       <div className='p-0 shadow'>
       <img className="w-100" height={120} src={props.thumbnail} alt={props.title} />
        <Link className='btn radius-20 shadow px-3 font-13 mt-3' to="/">شروع آزمون</Link>
       </div>
      </div>
    );
  };

// export default QuizCard;