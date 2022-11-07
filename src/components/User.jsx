import React from 'react'
import './user.css'



const User = ({data}) => {

    
  return (
    <div className='users'>
        <div className='image'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAZlBMVEXHzuH////Ey97///3z9vjGzeH//v/BzN7d5OvCyd3///zFzuDS2ebDyt/R1+j9///t8PTl6PDY3+jN0uTV2ubM0+G/y9vi5vHr7/S+yOLX3ez39frk6u/T2uT1+frd4Ozr7vfHyuKXQLlCAAAFC0lEQVR4nO2d7XaiMBBAySQBYwgBgdJVC/b9X3LR1t1u19pMtILO3NP+7UnvmUyGfCYJwzAMwzAMwzAMwzAMwzAMw+CBqRswV1gMwzAMwzAMwzAMwzAMwzCTAtpBBgCOZyvPo7Uxtm1Wq6osK822vsTB01OdV6pPxR6pgGWdRGvQRVeqVHop3lwtHMv6Hz1mp1HUwZA44hs2dQKt8+dULP96OrD9NXW7ZgcYKKpUnGDrpm7b3NCwVl6ckiX7YerGzQqAbNjIE6LeUYWZuomzwZpijKqvZaVL34G1UzdzFmSw/ZzT/++Lm5oz15is3Esv05OZ/QNe+sGRjy2A4RtPf9iSr0xddyZZ/dsTfZmQji0wVWhc7elJ75XKBvldtvpAKlViyerSuccE1n76gezMlk7UEicrFSVVWbDAqdrjF1TrrQ2yF+6RLUlbeoVXNfJMsSMCqMAK61/SeuqWTwAkcbLEQk/d9Amo41zJiqAsKKJcsSyW9Q3RsrYEh8NoWT3BqRrII2VRXJ5mWQhYFgKWhYBlIWBZCDKWFU7WsKxgsoh5UpbFsr6HZSFgWQhYFgKWhYBlIWBZCFgWAtexrFD0r7gFaYqyslLGLRuKpcpzYrYiV1j3ssZfYothNtbVAWLbJc3mAlee2K6jMWfFy1KGVmRlZbwrSU7Wc7ysZUlNFmoD/KfI2tFylWSRJelBVketdGjjZYlm6tbfmItk5cQiC4yPrh08tfNOYCrk6Yq/lMRq0iTR8f1w/Tp1429OdKUlLT1Zsfvg/ZpYej8ARcTRHSEWJC8Q0S3iYOYRmdbEyvd3oj6mFbG5rCNRSxYUd8Hv0fnJy2fOs6KY3keg9mhZ5Kr3I5D06OKB7hlpg69LF0C0GyawQkaW9ETHwhGbpAJXmO7I3uswhla3xKX4YuoWT8iY4lGuNqSvhQLMZnjpiX7qvKMx1xz5BbElsM+A2Ya6WpZPVMuGdyCD0NjyfO1fArkMKh+8n7qlMwCawMq0n7qlM8AMLCuY4PGQZY3D4S7MFees8ftQq8DIUpSr9zesC10RY1mJhcB5B6lol+97rGVZwWShex5Y1hhZoTcWkJcFkJmXYFnOkf6QhnZbhq7wSKmqmrAt9G6HkvBMafDszBHfkg0tgNDi/YgcyE5pYZcrRiqWFc6W7AM8Bn/PkW+pFlsOm7L2N7rSlAWwRrsSIp262dOAHwsPdCRDK2ujdnZvHLlnNLVxq6hT0n65tZTWpSEDne+iT+4I0XetMTTe/wVTdxsR+ujVKaSUm1Xy8J1Rg7FNee4tw2B82dgHnrKx2kLbKeRevzOorgb7mI+taaebUl4jqP6wlOWgHy+8rDV11cfe1fMl4x/0VeGyh4ouA+voW42+8yW8WoN5lPAah60OPb2AsJWOP7sXeIQnbl9dW6U/FFUfUWt719u+tc0gWUV9AeJJRf9c3HHtBdAu8KdzLmCsvZK7nB2E7LXdXa2kCkQePoXuLrzAtM+3VnXQJdOqvquxETJT3ChVnUTl93N2TJtc3WD8O4NUL3exDARg6gtuXbsaajX/SlWb26f1k0ihXvS8bYEdZqHqjTKZcZ1qoYh8OvSH6Nv5ll1PTcQdID+KL2ZadVnXePzdAz+KTOd6OiorZtUF3/FzTPLWFfEX0/0kc9wAp/VNv5kRNPPriG6YWspX9K+zy/F2yo/B8wzXHxHhMuJ2LtwEZdxF/9r1ZeXzlZXWr1eS9RtcCEZfy+xR1AAAAABJRU5ErkJggg==" alt="profile picture" />
        </div>
        <div className='data'>
            <h3>{data.username}</h3>
            <h4>{data.name}</h4>
            <p>e-mail: {data.email}</p>
        </div>
        <div className='website'>
            <a href={data.website}>{data.website}</a>
        </div>
        
        
    </div>
  )
}

export default User