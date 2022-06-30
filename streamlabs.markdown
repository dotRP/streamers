---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: StreamLabs/Cloudbot
---

#### Commands

1. TODO CloudBot Custom Commands
2. Click to copy
3. Replace `[Streamer]`, `[pronouns]` (todo: variable configurator?)

<div markdown="1" class="content-table">

| Command Name     | Response                                                                                                                             | Access Level    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------ | -------- |
| `!cast`          | `Want to learn more about the cast of dotRP? Check it out here: https://bit.ly/3NXeZaa`                                              | Everyone        |
| `!crash`         | `[Streamer] has crashed ${count <crash>} times...[pronouns] needs some driving lessons monkaSTEER`                                   | Mods            |
| `!devcru`        | `Want to learn more about the devCRU? Check it out here: https://bit.ly/3xtu3ax`                                                     | Everyone        |
| `!dotrp`         | `${customapi https://apiv3.m2s.bz/api/dotrp?code=OdpiZ6UmcAqxpyJeKjeU4X16sC45x222jS2ZcXR08ZVyAzFus3Yi5w==&type=${1:1                 | ' '}&name=${2:2 | ' '}}` | Everyone |
| `!down`          | `[Streamer] has been downed ${count <down>} times...someone get this [pronoun] some body armor!`                                     | Mods            |
| `!resetcrash`    | `${touser} is resetting the crash counter! ${count <crash> 0}`                                                                       | Mods            |
| `!resetdown`     | `${touser} is resetting the down counter! ${count <down> 0}`                                                                         | Mods            |
| `!resetseatbelt` | `${touser} is resetting the seatbelt counter! ${count <seatbelt> 0}`                                                                 | Mods            |
| `!seatbelt`      | `Aayy buckle up! Seatbelts save lives! [Streamer] has been ejected ${count <seatbelt>} times!`                                       | Everyone        |
| `!supportdotrp`  | `${customapi https://apiv3.m2s.bz/api/dotrp?code=OdpiZ6UmcAqxpyJeKjeU4X16sC45x222jS2ZcXR08ZVyAzFus3Yi5w==&name=support&type=timers}` | Everyone        |

</div>

#### Timers

1. TODO CloudBot Bot Timers
2. Click to copy

<div markdown="1" class="content-table">

| Timer Name    | Response                                                                                                                          | Time Interval (Reccommedned) |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Kraken        | `THE KRAKEN CONSUMES ALL`                                                                                                         | 30 minutes                   |
| LSLore        | `$readapi(https://apiv3.m2s.bz/api/dotrp?code=OdpiZ6UmcAqxpyJeKjeU4X16sC45x222jS2ZcXR08ZVyAzFus3Yi5w==&name=lslore&type=timers}`  | 60 minutes                   |
| dotRP Discord | `$readapi(https://apiv3.m2s.bz/api/dotrp?code=OdpiZ6UmcAqxpyJeKjeU4X16sC45x222jS2ZcXR08ZVyAzFus3Yi5w==&name=discord&type=timers}` | 30 minutes                   |
| dotRP Twitter | `Make sure to catch all the dotRP shenanigans over on twitter! https://twitter.com/dotrpofficial`                                 | 15-20 minutes                |

</div>
