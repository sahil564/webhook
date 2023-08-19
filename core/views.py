from django.shortcuts import render,redirect
from django.contrib import messages
from core.models import Lead 
# import datetime
from datetime import date
from datetime import datetime
# Create your views here.
import json
import requests

center_id="a9f1eac2-9755-45c7-9cbd-c3f55383d760"
guest_endpoint_url = "https://api.zenoti.com/v1/guests"
opp_url = "https://api.zenoti.com/v1/opportunities"

header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': "apikey f82354eaf23c46e8a2425783d1c08126efb1ce201b204502a3f462031115d113"
            }



def form(request):
    # ab=str(current_time)
    # a=ab[0:10]
    # l=a.replace("-", "/")
    # l=l.replace("/0", "/")
    # print("cureent time",l)
    q=list(Lead.objects.filter(number="08905086536"))
    print(q)
    q=q[-1]
    print(q.date)
    print(q.service)
    d=str(q.date)


    today = date.today()
    today = str(today)
    today=today.replace("-0", "-")
    sortbydate=list(Lead.objects.filter(number="08905086536",date="2023-08-17"))
    print("bydateshort",sortbydate)
    print("Today's date:", today)

    str_d1 = '2021-10-20'
    str_d2 = '2021-10-20'
    str_d1=str_d1.replace("-0","-")
    print(str_d1)
    # convert string to date object
    d1 = datetime.strptime(str_d1, "%Y-%m-%d")
    d2 = datetime.strptime(today, "%Y-%m-%d")
    # difference between dates in timedelta
    delta = d2 - d1
    print(f'Difference is {delta.days} days')


    # d1 = datetime.strptime(d, "%Y/%m/%d")
    # d2 = datetime.strptime(l, "%Y/%m/%d")
    # print(d1,d2)
    # delta = d2 - d1
    # print(f'Difference is {delta.days} days')



    # Printing value of now.
    
    # for i in q:
    #     print(i.date)


    return render(request,"form.html")



def register(request):
    if request.method=='POST':
        first_name=request.POST['first_name']
        last_name=request.POST["last_name"]
        gender=request.POST["gender"]
        email=request.POST['email']
        number=request.POST['number']
        category=request.POST['category']
        service=request.POST['service']
        city=request.POST['city']
        center=request.POST["center"]

        print(first_name,last_name,gender,email,number,category,service,city,center)
        user=Lead(first_name=first_name,last_name=last_name,gender=gender,email=email,number=number,category=category,service=service,city=city,center=center)
        
        today = date.today()
        today = str(today)
        sortbydate=list(Lead.objects.filter(number=number,date=today))
        if len(sortbydate)>=1:
            for i in sortbydate:
                if i.service==service:
                    return render(request,"index.html",{"text":"you already register please try after 24 hours"})
            user.save()
            create_guest_body = json.dumps({"center_id":center_id,
            "personal_info":{
                "mobile_phone":{
                    "phone_code":+91,
                    "number":number
                    },
                "first_name":first_name,
                "last_name":last_name,
                "email":email,
                "gender":gender,
            
                }
            })
            
            guest_create_response = requests.post(guest_endpoint_url, headers=header, data = create_guest_body)
            print(guest_create_response)
            print(type(guest_create_response.text))
            guestid=json.loads(guest_create_response.text)
            print(type(guestid))

            guest_id=list(guestid.values())[0]

            print("this is guest id",guest_id)
            #Create opportunity
            opportunity_title = first_name+last_name

            create_opportunity_body = json.dumps({
             "center_id": center_id,
             "opportunity_title": opportunity_title,
             "guest_id": guest_id,
             "created_by_id": guest_id,
            "followup_date": "2023-08-17T12:22:06"
            })
            response = requests.post(opp_url, headers=header, data = create_opportunity_body)

            print(response.text)
            print(response)


            return render(request,'index.html',{"text":'succesfully register team will contact you within 24 hours'}) 
        else:
            user.save()
            create_guest_body = json.dumps({"center_id":center_id,
            "personal_info":{
                "mobile_phone":{
                    "phone_code":+91,
                    "number":number
                    },
                "first_name":first_name,
                "last_name":last_name,
                "email":email,
                "gender":gender,
            
                }
            })
            
            guest_create_response = requests.post(guest_endpoint_url, headers=header, data = create_guest_body)
            print(guest_create_response)
            print(type(guest_create_response.text))
            guestid=json.loads(guest_create_response.text)
            print(type(guestid))

            guest_id=list(guestid.values())[0]

            print("this is guest id",guest_id)
            #Create opportunity
            opportunity_title = first_name+last_name

            create_opportunity_body = json.dumps({
             "center_id": center_id,
             "opportunity_title": opportunity_title,
             "guest_id": guest_id,
             "created_by_id": guest_id,
            "followup_date": "2023-08-17T12:22:06"
            })
            response = requests.post(opp_url, headers=header, data = create_opportunity_body)

            print(response.text)
            print(response)

            return render(request,'index.html',{"text":'succesfully register team will contact you within 24 hours'}) 
            # else:
            #  print
    
                # user=User.objects.create(username=username,password=password,email=email,first_name=first_name,last_name=last_name)
                # user.set_password(password)
                # user1=newuser(username=username)
                # user1.save()
                # user.save()
                # context={'orgnization':username,
                #          "username":first_name}
                # return render(request,'login.html',context)
    else:
        print("this is not post request")
        return render(request,"index.html")
    





def new(request):
    str_d1 = '2021-10-20'
    str_d2 = '2021-10-20'

    # convert string to date object
    d1 = datetime.strptime(str_d1, "%Y-%m-%d")
    d2 = datetime.strptime(str_d2, "%Y-%m-%d")
    # difference between dates in timedelta
    delta = d2 - d1
    print(f'Difference is {delta.days} days')
    


    return render(request,"index.html")


