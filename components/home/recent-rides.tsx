'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getIconByName, recentRides } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function RecentRides() {
  if (recentRides.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-muted-foreground">You haven&apos;t taken any rides yet.</p>
          <Button variant="outline">Book Your First Ride</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {recentRides.map((ride, index) => {
        return (
          <motion.div
            key={ride.id}
            className="ride-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-primary/5 p-4 flex items-center justify-center md:border-r border-border">
                    <div className="flex flex-col items-center text-center h-15  w-15">
                      {getIconByName(ride.service)}
                      {/* <div className="text-sm font-medium capitalize">{ride.service}</div> */}
                      <div className="text-xs text-muted-foreground">{ride.distance} km</div>
                    </div>
                  </div>

                  <div className="col-span-2 p-4 space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="space-y-1 flex-1">
                        <div className="text-sm font-medium">From: {ride.from}</div>
                        <div className="text-sm font-medium">To: {ride.to}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs">{ride.date}</span>

                      <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                      <span className="text-xs">{ride.time}</span>
                    </div>
                  </div>

                  <div className="bg-card p-4 flex flex-col justify-center items-center md:items-end space-y-2 border-t md:border-t-0 md:border-l border-border">
                    <div className="text-lg font-semibold">${ride.price.toFixed(2)}</div>
                    <Button variant="outline" size="sm">Book Again</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}

      <div className="flex justify-center pt-4">
        <Button variant="outline">View All Rides</Button>
      </div>
    </div>
  );
}
