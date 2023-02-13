window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    /*for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }*/
    for(const objet of ['img', 'title','release_date', 'vote_average']){
      replaceText(`${objet}`, process.movies[objet]);
    }
    for(const objet of ['img', 'title', 'overwiew','release_date', 'vote_average', 'video']){
      replaceText(`${objet}`, process.movies[objet]);
    }
  })