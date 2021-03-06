from django.test import TestCase
from django.urls import reverse
from django.http import JsonResponse
from django.test import Client
import json

class TestMethodsInViews(TestCase):

    def test_connect_server(self):
        '''
        test connect server
        '''
        c = Client()
        response = c.get('')
        self.assertEquals(response.status_code, 200)

    def test_get_response(self):
        c = Client()
        data = {'spendtime' : '1', 'remaining' : '2.4', 'road' : '2 hours'}
        response = c.post(reverse('travelplanner:remain'),data,content_type="application/json")
        self.assertEquals(response.status_code, 200)

        data_place = {'place' : 'pattaya', 'origin' : 'bangkok'}
        response_place = c.post(reverse('travelplanner:place'),data_place,content_type="application/json")
        self.assertEquals(response_place.status_code, 200)

    def test_time_place(self):
        '''
        test get data from google api
        '''
        c = Client()
        data = {'place' : 'pattaya', 'origin' : 'bangkok'}
        response = c.post(reverse('travelplanner:place'),data,content_type="application/json")
        text = response.content.decode('utf-8')
        self.assertTrue('hour' in text)

        data1 = {'place' : 'phuket', 'origin' : 'chaingmai'}
        response1 = c.post(reverse('travelplanner:place'),data1,content_type="application/json")
        text = response1.content.decode('utf-8')
        self.assertTrue('hour' in text)
    
    def test_time_place_space(self):
        '''
        test place with space
        '''
        c = Client()
        data = {'place' : 'pat taya', 'origin' : 'b a n g kok'}
        response = c.post(reverse('travelplanner:place'),data,content_type="application/json")
        text = response.content.decode('utf-8')
        self.assertTrue('hour' in text)

        data1 = {'place' : 'Central World', 'origin' : 'chaingm ai'}
        response1 = c.post(reverse('travelplanner:place'),data1,content_type="application/json")
        text = response1.content.decode('utf-8')
        self.assertTrue('hour' in text)

    def test_remaining_time(self):
        '''
        test compute remaining time
        '''        
        c = Client()
        data = {'spendtime' : '1', 'remaining' : '20', 'road' : '2 hours'}
        response = c.post(reverse('travelplanner:remain'),data,content_type="application/json")
        ans = response.content.decode('utf-8')
        self.assertEquals(17,  float(ans.replace('\"', "")))

        data1 = {'spendtime' : '2.30', 'remaining' : '24', 'road' : '2.45 hours'}
        response1 = c.post(reverse('travelplanner:remain'),data1,content_type="application/json")
        ans1 = response1.content.decode('utf-8')
        self.assertEquals(18.45,  float(ans1.replace('\"', "")))
        
        data2 = {'spendtime' : '2.30', 'remaining' : '10.30', 'road' : '1 hours'}
        response2 = c.post(reverse('travelplanner:remain'),data2,content_type="application/json")
        ans2 = response2.content.decode('utf-8')
        self.assertEquals(7,  float(ans2.replace('\"', "")))

    def test_status_savedata(self):
        '''
        test status save data
        '''
        c = Client()
        data = {'email' : 'mmintttt@gmail.com','location' : 'chonburi','spendtime' : '1','times' : '15:54','date' : '02/12/2018','duration' : '3 hours','name' : 'mimint trip',
    'id' : '05','remaining': '21.30'}
        response = c.post(reverse('travelplanner:savedata'),data,content_type="application/json")
        self.assertEquals(response.status_code, 200)
    
    def test_status_user_data(self):
        '''
        test status user data
        '''
        c = Client()
        data = {'email': 'mmintttt@gmail.com'}
        response = c.post(reverse('travelplanner:user'),data,content_type="application/json")
        self.assertEquals(response.status_code, 200)
    
    def test_status_plan_data(self):
        '''
        test status plan_data
        '''
        c = Client()
        data = {'email': 'mmintttt@gmail.com','id' : '03'}
        response = c.post(reverse('travelplanner:plan'),data,content_type="application/json")
        self.assertEquals(response.status_code, 200)
    
    def test_status_searchplace(self):
        '''
        test place that can search
        '''
        c = Client()
        data = {'place': 'bangkok'}
        response = c.post(reverse('travelplanner:search'),data,content_type="application/json")
        self.assertEqual(response.status_code,200)    
