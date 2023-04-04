import styles from "../About/About.module.css"
export default function () {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.aboutContainer}>
        <div className={styles.circles}></div>
        <div className={styles.detailsContainer}>
          <div className={styles.avatar}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsjbrPaIIENJ4nVYvzYkti6tSVSBPqItJhw&usqp=CAU"
              className={styles.imgFluid}
              alt=""
            />
          </div>
          <div className={styles.about}>
            <div className={styles.name}>
              <p>About:</p>
              <h2>Rick & Morty</h2>
            </div>
            <div className={styles.aboutContent}>
              <p>
                Rick and Morty is an American adult animated science-fiction
                sitcom created by Justin Roiland and Dan Harmon for Cartoon
                Network's nighttime programming block Adult Swim. It is
                distributed internationally by Warner Bros.The series follows
                the misadventures of Rick Sanchez, a cynical mad scientist, and
                his good-hearted but fretful grandson Morty Smith, who split
                their time between domestic life and interdimensional adventures
                that take place across an infinite number of realities, often
                traveling to other planets and dimensions through portals and on
                Rick's flying saucer.
              </p>
              <button>Watch episodes</button>
            </div>
          </div>
          <div className={styles.clear}></div>
        </div>
      </div>
    </div>
  )
}
