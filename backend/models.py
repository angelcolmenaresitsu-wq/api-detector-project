from datetime import datetime

class ApiDetectionRecord:
    def __init__(self, browser_info, apis_detected):
        self.timestamp = datetime.utcnow().isoformat()
        self.browser_info = browser_info
        self.apis_detected = apis_detected

    def to_dict(self):
        return {
            "timestamp": self.timestamp,
            "browser_info": self.browser_info,
            "apis_detected": self.apis_detected
        }