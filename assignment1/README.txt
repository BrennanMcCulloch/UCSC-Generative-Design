Ok, so here's the paragraph of what I did;

Essentially, I developed particles that, when 
"updated" as opposed to "emitted", can have their
velocity and lifespan modified. I then synced them up
to the PITCH, not the volume, of the music piece. 
The higher the pitch, the faster the particles go. 
The pitches are split into 8 bins as opposed to 1024.
I tried to make all of the particle lifespans last until
they went off screen, but that shouldn't be too hard to
modify in the code if one was so willing. 