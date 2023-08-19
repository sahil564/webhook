from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests

PAGE_ACCESS_TOKEN = 'YOUR_PAGE_ACCESS_TOKEN'

@csrf_exempt
def fb_webhook(request):
    if request.method == 'GET':
        mode = request.GET.get('hub.mode')
        token = request.GET.get('hub.verify_token')
        challenge = request.GET.get('hub.challenge')
        if mode == 'subscribe' and token == 'YOUR_VERIFY_TOKEN':
            return HttpResponse(challenge)
        else:
            return HttpResponse('Error, invalid verification token')
    elif request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        for entry in data['entry']:
            for messaging_event in entry['messaging']:
                if messaging_event.get('message'):
                    sender_id = messaging_event['sender']['id']
                    recipient_id = messaging_event['recipient']['id']
                    message_text = messaging_event['message']['text']
                    send_message(sender_id, 'You said: ' + message_text)
        return HttpResponse('OK')

def send_message(recipient_id, message_text):
    params = {
        'access_token': PAGE_ACCESS_TOKEN,
        'recipient': json.dumps({'id': recipient_id}),
        'message': json.dumps({'text': message_text})
    }
    headers = {'Content-type': 'application/json'}
    r = requests.post('https://graph.facebook.com/v12.0/me/messages', params=params, headers=headers)
