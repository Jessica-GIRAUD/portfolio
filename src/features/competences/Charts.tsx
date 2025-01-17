import styles from './Competences.module.scss'; // Assurez-vous que le fichier CSS existe

const Charts = () => {
  const skills = [
    { label: 'React', color: '#5EB344', value: 80 },
    { label: 'Label 2', color: '#FCB72A', value: 50 },
    { label: 'Label 3', color: '#F8821A', value: 100 },
    { label: 'Label 4', color: '#E0393E', value: 15 },
    { label: 'Label 5', color: '#963D97', value: 1 },
    { label: 'Label 6', color: '#069CDB', value: 90 },
  ];

  return (
    
      <div className={styles.simpleBarChart}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.item}
            style={
              {
                '--clr': skill.color,
                '--val': `${skill.value}%`,
              } as React.CSSProperties
            }
          >
            <div className={styles.label}>{skill.label}</div>
            <div className={styles.value}>{skill.value}%</div>
          </div>
        ))}
      </div>
   
  );
};

export default Charts;
