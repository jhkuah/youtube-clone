import React, { useEffect, useState } from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment/moment'
import numeral from 'numeral'

const Video = ({video}) => {

  const {id, snippet:{channelId, channelTitle, title, publishedAt, thumbnails:{medium}}}= video

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const formattedDuration = moment.utc(seconds * 1000).format("mm:ss")
  const formattedViews = numeral(views).format("0.a").toUpperCase()
  const formattedPublishedAt = moment(publishedAt).fromNow()

  useEffect(()=> {
    const videoDetails = async () => {
     const {data: {items}} = await request('/videos', {
      params: {
        part: 'contentDetails, statistics',
        id: id,
      }
     })
     setDuration(items[0].contentDetails.duration)
     setViews(items[0].statistics.viewCount)
    }
    videoDetails()
  }, [id])

  useEffect(()=> {
    const fetchChannelIcon = async () => {
     const {data: {items}} = await request('/channels', {
      params: {
        part: 'snippet',
        id: channelId,
      }
     })
     setChannelIcon(items[0].snippet.thumbnails.default)
    }
    fetchChannelIcon()
  }, [channelId])


  return (
    <div className="video">
      <div className="video__thumbnail">
        <img src={medium.url} alt="" />
        <span>{formattedDuration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {formattedViews} views •
        </span>
        <span>{formattedPublishedAt}</span>
      </div>
      <div className="video__channel">
        <img
          src={channelIcon?.url}
          alt=""
        />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
}

export default Video