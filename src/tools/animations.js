import animations from '../styles/animations.css';

export const startSlideAnimation = ( props ) => {
  const { locations, id, active } = props;

  let activeIndex, newActiveIndex;
  if( !active ) {
    locations.map( ( location, index ) => {
      if( location.active ) {
        activeIndex = index;
      }

      if( location.id === id ) {
        newActiveIndex = index;
      }
    })
  } else {
    shake();
  }

  if( newActiveIndex > activeIndex ) {
    enterFromBottom();
  } 

  if( newActiveIndex < activeIndex ) {
    enterFromTop();
  }
}

export const enterFromBottom = () => {
  const active = document.querySelector(`#activeItem`);
  active.classList.remove( animations.enterFromBottom );
  active.classList.add( animations.enterFromBottom );
  active.addEventListener("animationend", listener, false);
}

export const enterFromTop = () => {
  const active = document.querySelector(`#activeItem`);
  active.classList.add( animations.enterFromTop );
  active.addEventListener('animationend', listener, false);
}

export const shake = () => {
  const active = document.querySelector(`#activeItem`);
  active.classList.add( animations.shake );
  active.addEventListener('animationend', listener, false);
}
  
export const listener = ( event ) => {
  const active = document.querySelector(`#activeItem`);
  const prev = document.querySelector(`#prevItem`);

  switch( event.type ) {
    case 'animationend':
      active.classList.remove( animations.enterFromBottom );
      active.classList.remove( animations.enterFromTop );
      active.classList.remove( animations.shake );
      break;
  }
}