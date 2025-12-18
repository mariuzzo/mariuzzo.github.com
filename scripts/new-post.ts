#!/usr/bin/env node
import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import util from 'util'
import { format, formatISO } from 'date-fns'
import { untoken } from 'untoken'

const writeFile = util.promisify(fs.writeFile)

const prompt = inquirer.createPromptModule()

const template = `---
date: {date}
title: 'TBD'
slug: {slug}
---`

async function newPost() {
  const { postType } = await prompt({
    message: 'What type of new post to be created?',
    type: 'select',
    name: 'postType',
    choices: [
      { name: 'Lymphoma', value: 'lymphoma' },
      { name: 'Code', value: 'code' }
    ]
  })

  const now = Date.now()
  const dateSlug = format(now, 'yyyy-MM-dd')
  const postFilePath = path.join(
    __dirname,
    '../src/markdown',
    postType,
    `${dateSlug}.md`
  )

  const date = formatISO(now)
  const slug = `/${postType}/${dateSlug}`
  const contents = untoken(template, { date, slug })

  await writeFile(postFilePath, contents)
}

newPost()
