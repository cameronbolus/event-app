﻿using Application.Web.Data;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

//CITATION: Seeder method is from http://thedatafarm.com/uncategorized/seeding-ef-with-json-data/

namespace Application.Web.Models
{
//    public static class Seeder
//    {
//        public static void Seedit(string jsonData,
//                          IServiceProvider services)
//        {
//            JsonSerializerSettings settings = new JsonSerializerSettings
//            {
//                ContractResolver = new PrivateSettersContractResolver()
//            };
//            List<Event> events =
//             JsonConvert.DeserializeObject<List<Event>>(
//               jsonData, settings);
//            using (
//             var serviceScope = services
//               .GetRequiredService<IServiceScopeFactory>().CreateScope())
//            {
//                var context = serviceScope
//                              .ServiceProvider.GetService<EventDbContext>();
//                if (!context.Events.Any())
//                {
//                    context.AddRange(events);
//                    context.SaveChanges();
//                }
//            }
//        }
//    }
}