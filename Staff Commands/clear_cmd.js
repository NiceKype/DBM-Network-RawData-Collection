{
  "name": "clear",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "xyBZE",
  "actions": [
    {
      "info": "0",
      "find": "695012264800944188",
      "storage": "1",
      "varName": "needed-role",
      "name": "Find Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "3",
      "varName2": "needed-role",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "0",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "7",
      "name": "Check Parameters"
    },
    {
      "title": "**Clear Command**",
      "author": "",
      "color": "#ff0000",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "usage",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "usage",
      "message": "Correct Usage: `!clear <amount>`.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "usage",
      "message": "NiceBot ${serverVars(\"version\")} // Created by NiceKype",
      "footerIcon": "https://images-ext-1.discordapp.net/external/VLeig03784EZgLPytcEkabM408wONPgyiKlIMZjTmrE/%3Fsize%3D128/https/cdn.discordapp.com/avatars/337909008583098368/335485e2f2e14f88dc4da133187abe02",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "usage",
      "channel": "0",
      "varName2": "",
      "storage3": "1",
      "varName3": "usage-del",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "time": "15",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "usage-del",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "amount",
      "name": "Store Command Params"
    },
    {
      "channel": "0",
      "count": "${tempVars(\"amount\")}",
      "condition": "0",
      "custom": "",
      "varName": "",
      "name": "Delete Bulk Messages"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "title": "**${tempVars(\"amount\")} Nachrichten wurden gelöscht**",
      "author": "",
      "color": "#02D00E",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "clear",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "clear",
      "message": "NiceBot ${serverVars(\"version\")} // Created by NiceKype",
      "footerIcon": "https://images-ext-1.discordapp.net/external/VLeig03784EZgLPytcEkabM408wONPgyiKlIMZjTmrE/%3Fsize%3D128/https/cdn.discordapp.com/avatars/337909008583098368/335485e2f2e14f88dc4da133187abe02",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "clear",
      "channel": "0",
      "varName2": "",
      "storage3": "1",
      "varName3": "delete",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "delete",
      "name": "Delete Message"
    }
  ]
}
