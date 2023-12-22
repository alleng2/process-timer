import time
import psutil
import os
from notifypy import Notify

def detect_process(pname):

    found = False

    for process in psutil.process_iter(['pid', 'name', 'create_time']):
        if process.info['name'].lower() == pname:
            print("Found!")
            found = True
            return (process.info['name'], True)

    if not found:
        print("Not found!")
    
    return (None, False)
        


if __name__ == "__main__":
    processes_to_monitor = ["spotify.exe", "messenger.exe", "valorant.exe"]
    time_to_wait = 60

    print(processes_to_monitor[2])

    found = detect_process(processes_to_monitor[2])

    while (not found[1]):
        found = detect_process(processes_to_monitor[2])
        if (found[1]):
            break
        time.sleep(3)

    first_notification = Notify() # make the notification
    first_notification.title = "Process Detector"
    first_notification.message = "10 seconds left!"

    end_notif = Notify() # make the notification
    end_notif.title = "Process Detector"
    end_notif.message = "Time's up! Killing process!"

    print("Sleeping for " + str(time_to_wait) + " seconds!")
    time.sleep(time_to_wait - 10)

    first_notification.send()

    time.sleep(10)
    print("Done!")

    end_notif.send()

    proc = found[0]
    os.system("taskkill /F /IM " + proc)
    
