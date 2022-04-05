const ProjectFilter = ({dataValue,innerText,onClick}) => {
    return (
        <li onClick={onClick} data-value={dataValue}>{innerText}</li>
    )
}

export default ProjectFilter
