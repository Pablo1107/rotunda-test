# Error Alarm Exercise
In general terms, for this challenge I would inject a counter to the logError function described in the PDF.

The counter:
 - Will start at zero and with and empty timestamp
 - After the first error occurs, it will save the timestamp.
 - After the desired time happens, if the counter is more than the threshold of errors per given time:
   - Notify via the desired notification (email, slack, or else)
   - Reset the counter

This solution makes it so that no more than one notification happens between intervals of the desired time.

In this file there is an example js kinda pseudo code for the concept, it wasn't required but I wanted to write it down for a more comprehensive description of what it's written here.
