---
date: 2020-11-13T09:30:00.000
title: 'Remove old node modules to claim space'
slug: /code/remove-old-node-modules-directories
---

At the time of writing this: I have 74 Node projects in my machine. Each of them have dozens of dependencies installed in a `node_modules` directory. And a few them takes 1GB of disk space. 😱

I decided to write a command that would remove _node modules_ directories that I'm no longer using. For myself, I determined that any project that I haven't touched in the last 3 months was a good candidate for cleanup. Anyway, if I need to take on an old project, I would just have to `npm i` and wait a few seconds or minutes.

I ended up composing 2 commands: one for checking the size of _node modules_ before deleting, and the other to actually remove these directories.

**Note:** The following commands assume that all projects are under the same parent directory. From that parent directory, these commands needs to be executed.

## Checking the size of old node modules

```shell
find . -type d \
       -ctime +90 \
       -name node_modules \
       -depth 2 \
       -exec du -hs {} \;
```

## Removing old node modules directories

```shell
find . -type d \
       -ctime +90 \
       -name node_modules \
       -depth 2 | xargs rm -rf
```

That's it! Removing old _node modules_ directories have freed around 10GB from my machine. That's a win for me! Hope you find this useful.
