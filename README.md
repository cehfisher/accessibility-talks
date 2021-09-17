# Accessibility Talks

Github repo for organizing speakers/resources for Accessibility Talks

[Link to YouTube channel](https://www.youtube.com/c/AccessibilityTalks)

## Content

Here is the instruction for adding content to the site. The site is using Markdown files with the following types.

### Posts

The main speaker posts are added to the `/content/posts` folder as an MD file.

Name the file `YEAR-MON.md` (eg `2021-JAN.md`)

Using Frontmatter for Markdown add the following fields:

- title: Title of the Talk
- subtitle: Name of Speaker
- date: Date of Talk
- template: "post"
- draft: true or false depending on publication status.
- slug: YYYY-MON entry. This will be the final URI of the entry.
- category: I am not sure where this is used.
- next: true or false depending on if its the next months talk (@todo: logic)
- tags: An array of 5 tags, in alphabetic order, pertaining to the talk. Year should be the first.
- description: Short description of the talk.
- socialImage: Path to image in the `/static` folder
- calendar: Link to the "Add to Calendar" link on the bio. (@todo: Have it removed after the event has passed.)
- youtube: YouTube ID of the broadcast WITHOUT the `https://youtube` text.
- recorded: The Date and Time of the event.
- speaker: Actually used Speaker name.
- speakerContact: An object with two fields.
  - name: Name of the service. e.g. "Twitter"
  - contact: Contact data (e.g. "@a11ytalks")

After the Frontmatter section, add the full body details of the talk.

### Member

This is the staff profiles.

### Pages

This is the content on the landing pages.

## Event Preperation

### Week 1

- Confirm the event details with the speaker. Make sure the time of the event is translated to the speaker's time zone, so there is no miscommunication.
- Obtain the following details from the speaker: Title, brief description, twitter handle, d.o. profile name, speaker bio, etc.
- Create new Zoom meet-up for the event. You will need this URL for the flyer and event creation. Make sure you double check the meeting settings!
- Create flyer for current month's speaker. Have it reviewed by the speaker and at least one other person. More eyes, the better.
- Create a Drupal event.
- Create a Drupal project task.
- Add upcoming event details to the website.
- Start promoting the event. Places to promote include: Twitter, LinkedIn, Drupal Slack, A11y Slack, internal work Slacks.

### Week 2-3

- More promotions in the various places.
- Chat with speaker. Make sure they are prepared to give the talk. Offer to run through the talk and/or walk through the Zoom process. Some speakers will need minimal help, so speakers will need more help.

### Week of Event

- This is the last chance to promote the event. Make sure to talk about it at the beginning of the week, the day before, and the day of the event. Use the hashtag #a11ytalks for all promotions.
- Confirm with speaker on event details. Make sure they are ready and prepared as much as you can. Remind them of the event time in their time zone.
- Write intro about the speaker and talk. Make sure to write a wrap-up blurb as well about the next event (if the event deatils are finished).

### Day of Event

- Reconfirm with speaker on event details. Ask if there are any last-minute questions, concerns, etc.
- More promotions! Remind people this is the day of the actual event.
- Jump on the Zoom event 15-30 minutes before the event to do a final video, audio, and slide check.
- Remember to press record! Do not use the "co-host" option, otherwise your video will be cropped.
- Remind the viewers that they can ask questions in the chat box or on Twitter using the hashtag #a11ytalks.
- Also remind the viewers that all the links and the video will be online after the event.
- After the event, download the video and chat transcripts.
- Remember to thank the speaker publically for their talk and remind the viewers that all the links and the video will be online after the event.

### After the Event

- Upload the video to YouTube or convert the live-stream into a video. Include chat transcript, event description, ways to contact the speaker, links in the presentation, etc. Make sure the settings are the same as other videos, plus use flyer as the thumbnail image for the video.
- Work on captions for the event. Use the base YouTube transcript as a starting point, or pay for a video transcript, as time/budget allows.
- Go back to Twitter and promote the video. Make sure to include the speaker in the tweet, plus the hashtag #a11ytalks in case people are following that instead.
- Go back to the old event on Drupal and update the links to the video.
- Create wrap-up post about the event on the website. Update YouTube and Drupal event to include a link to this post.

### Ongoing/General

- Find speaker for next month. Always think ahead. Things happen, speakers are busy or get sick. Try to be at least 1-2 months booked out.
- Promote the video series as a whole. Remind people that if they subscribe to the channel, they will get notices automatically (ie. when a new video is up, or info on the next event, etc).
- Find additional places to add the event, to reach more people.
- Work on captions/transcripts of older videos
- Work with team/employers to support live captions for live-streaming events.
