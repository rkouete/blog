import { Fragment } from 'react';
import Safe from 'react-safe';

function Comments() {

  return (
    <Fragment>
      <section >
        <div id="disqus_thread"></div>
      </section>
      <Safe.script>
        {
          (function () { // DON'T EDIT BELOW THIS LINE
            if (typeof document !== 'undefined') {
              var d = document, s = d.createElement('script');
              s.src = 'https://techblog-yvfpjwlqxi.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            }
          }())
        }
      </Safe.script>
    </Fragment>
  );
}

export default Comments
