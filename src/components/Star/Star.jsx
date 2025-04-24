/* eslint-disable react/prop-types */
const Star = ({ color, className, Width, Height }) => {
  return (
    <svg width={Width} height={Height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"width": Width}} className={className}>
      <path d="M15.3203 9.53027L15.4375 9.80762L15.7383 9.83398L21.9746 10.3623L17.2383 14.4668L17.0098 14.6641L17.0781 14.958L18.501 21.0576L13.1396 17.8213L12.8818 17.665L12.623 17.8213L7.26074 21.0576L8.68457 14.958L8.75293 14.6641L8.52539 14.4668L3.78711 10.3623L10.0244 9.83398L10.3252 9.80762L10.4424 9.53027L12.8809 3.77637L15.3203 9.53027Z" fill={color} stroke={color}/>
    </svg>
  );
}
export default Star;